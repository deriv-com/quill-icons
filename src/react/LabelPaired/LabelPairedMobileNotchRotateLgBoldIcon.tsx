import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateLgBoldIcon = (
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
      <path d='M.875 8.625A3.11 3.11 0 0 1 4 5.5h7.5a3.134 3.134 0 0 1 3.125 3.125v4.844c-.195.078-.39.195-.586.273-.312-.39-.781-.625-1.289-.703V8.625c0-.664-.586-1.25-1.25-1.25h-1.25V8a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 5.25 8v-.625H4c-.703 0-1.25.586-1.25 1.25v13.75c0 .703.547 1.25 1.25 1.25h7.344c.39.625.898 1.172 1.445 1.602-.39.195-.86.273-1.289.273H4c-1.758 0-3.125-1.367-3.125-3.125zM11.5 15.188c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v.507a5.53 5.53 0 0 1 3.75-1.445c2.305 0 4.258 1.406 5.156 3.398a.935.935 0 0 1-.508 1.211c-.468.235-1.015 0-1.21-.468-.586-1.328-1.915-2.266-3.438-2.266-1.133 0-2.11.508-2.812 1.25h1.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-3.126c-.546 0-.937-.39-.937-.937zm.469 6.953c-.235-.47 0-1.016.469-1.25.468-.196 1.015.039 1.25.507.546 1.329 1.874 2.227 3.437 2.227 1.094 0 2.11-.469 2.773-1.25h-1.21c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-.47a5.65 5.65 0 0 1-3.75 1.407c-2.344 0-4.297-1.367-5.156-3.36' />
    </g>
    <defs>
      <clipPath id='adff31b282c03a06d445f85b1fc670db__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateLgBoldIcon);
export default ForwardRef;
