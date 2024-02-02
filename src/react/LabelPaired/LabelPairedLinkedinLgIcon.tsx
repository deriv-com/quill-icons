import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 6.75q.547 0 .898.352.352.39.352.898v15q0 .508-.352.898-.35.352-.898.352h-15q-.547 0-.898-.352A1.3 1.3 0 0 1 .25 23V8q0-.508.352-.898.35-.352.898-.352zm-10.977 15h.04v-8.36H2.945v8.36zm-1.289-9.492q.665 0 1.055-.43a1.58 1.58 0 0 0 .469-1.055q-.039-.664-.469-1.093-.39-.43-1.055-.43-.624 0-1.054.43-.43.429-.43 1.093 0 .626.43 1.055.43.43 1.054.43M15.25 21.75v-4.57q.078-1.72-.547-2.852-.624-1.094-2.539-1.133-.977 0-1.601.43-.626.39-.86.898h-.039v-1.132h-2.5v8.359h2.617v-4.14q-.04-.86.235-1.485.312-.625 1.289-.664.975.079 1.172.742.233.703.195 1.485v4.062z' />
    </g>
    <defs>
      <clipPath id='db960b7243d9e6ae__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinLgIcon);
export default ForwardRef;
