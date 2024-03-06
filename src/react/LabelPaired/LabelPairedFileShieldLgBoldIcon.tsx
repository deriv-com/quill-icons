import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 23.625h9.648a7.9 7.9 0 0 0 1.524 1.563 2.2 2.2 0 0 1-1.172.312h-10q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5h6.484q1.015 0 1.758.742l3.516 3.516q.742.742.742 1.797v2.03l-1.875.743V11.75H10.25q-.547 0-.898-.352Q9 11.048 9 10.5V7.375H2.75q-.586.039-.625.625v15q.039.585.625.625m14.023-9.297a.83.83 0 0 1 .704 0l4.687 1.875q.547.234.586.86.04 1.288-.43 2.89-.43 1.602-1.562 3.086-1.172 1.485-3.281 2.383a.83.83 0 0 1-.704 0q-2.11-.899-3.28-2.383-1.134-1.485-1.563-3.086-.47-1.602-.43-2.89.039-.626.586-.86zm4.063 3.36-3.711-1.485v7.344q1.953-1.055 2.813-2.695.82-1.602.898-3.165' />
    </g>
    <defs>
      <clipPath id='9cbb85970cbd4565b57af09b72bac8b9__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldLgBoldIcon);
export default ForwardRef;
