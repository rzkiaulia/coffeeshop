export default {
    inserted(el, binding, vnode) {
        const minimum = parseFloat(binding.value.min);
        const maximum = parseFloat(binding.value.max);
        const precision = parseFloat(binding.value.precision === undefined ? 0 : binding.value.precision);
        const allowEmpty = Object.prototype.hasOwnProperty.call(binding.value, 'empty') ? binding.value.empty : true;
        const regExp = /\d|\.|-/;
        let content = '';

        const setValue = (val) => {
            if (vnode.componentInstance) {
                vnode.componentInstance.$emit('input', val);
            } else {
                el.value = val;
                el.dispatchEvent(new Event('input'));
            }
        };

        el.addEventListener('keypress', (e) => {
            const keyInput = String.fromCharCode(typeof e.charCode === 'number' ? e.charCode : e.keyCode);
            content = e.target.value;

            if (!regExp.test(keyInput) && !e.ctrlKey) {
                e.preventDefault();
            } else if (content.indexOf('.') > 0 && keyInput === '.') {
                e.preventDefault();
            } else if (binding.value.precision === 0 && keyInput === '.') {
                e.preventDefault();
            } else if (+(content + keyInput) > +maximum) {
                e.preventDefault();
            }
        });

        el.addEventListener('keyup', (e) => {
            content = parseFloat(e.target.value);

            if (!content) {
                content = 0.0;
            }

            if (maximum !== undefined && content > maximum) {
                setValue(maximum);
                content = maximum;
            }
        });

        el.addEventListener('focusout', (e) => {
            if (!parseFloat(e.target.value)) {
                content = '';
            } else {
                content = e.target.value === '' ? '' : parseFloat(e.target.value);
            }

            if (minimum !== undefined && (content < minimum || content === '')) {
                if (content === '' && allowEmpty) {
                    setValue('');
                    content = '';
                } else {
                    setValue(minimum);
                    content = minimum;
                }
            }

            if (content === '' && allowEmpty) {
                e.target.value = '';
                setValue(e.target.value);
            } else {
                e.target.value = (+content).toFixed(precision);
                setValue(parseFloat(e.target.value));
            }
        });
    }
};