import { forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export abstract class AbstractValueAccessor<T> implements ControlValueAccessor {
    _value: T;
    get value(): T { return this._value; }
    set value(val: T) {
      if (val === this._value) {
        return;
      }
      this._value = val;
      this.onChange(val);
    }

    writeValue(value: T) {
      this._value = value;
      // warning: comment below if only want to emit on user intervention
      this.onChange(value);
    }

    onChange = (_) => {};
    onTouched = () => {};
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    abstract setDisabledState(isDisabled: boolean);
}

export function MakeProvider(type: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
