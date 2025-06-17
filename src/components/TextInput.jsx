import { useController } from 'react-hook-form';
import { Input } from './ui';
import { TextArea } from './ui/TextArea';

const TextInput = ({ control, name, multiline, type = 'text', ...rest }) => {
  const form = useController({ control, name });
  const error = form.formState.errors[name];

  const Component = multiline ? TextArea : Input;

  return (
    <div>
      <Component
        {...rest}
        type={type}
        name={name}
        onChange={form.field.onChange}
        onBlur={form.field.onBlur}
        value={form.field.value || ''}
      />
      {error?.message && (
        <div className='mt-2 text-sm text-red-500'>{error.message}</div>
      )}
    </div>
  );
};

export default TextInput;
