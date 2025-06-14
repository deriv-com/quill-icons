import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 9.75c-3.094 0-5.578 1.406-7.5 3.188A16.8 16.8 0 0 0 2.297 18c.656 1.406 1.875 3.422 3.703 5.11 1.922 1.78 4.406 3.14 7.5 3.14 3.047 0 5.531-1.36 7.453-3.14 1.828-1.688 3.094-3.704 3.703-5.11-.61-1.406-1.875-3.375-3.656-5.062-1.969-1.782-4.453-3.188-7.5-3.188m-9.047 1.547C6.656 9.234 9.703 7.5 13.5 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.062 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172-.704 1.641-2.157 4.078-4.36 6.141s-5.25 3.75-9 3.75c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.704-1.688 2.157-4.125 4.36-6.141M13.5 21.75c2.063 0 3.75-1.64 3.75-3.75a3.76 3.76 0 0 0-3.75-3.75h-.094c.047.281.094.516.094.75 0 1.688-1.36 3-3 3-.281 0-.516 0-.75-.094V18c0 2.11 1.64 3.75 3.75 3.75m0-9.75c2.11 0 4.078 1.172 5.156 3 1.078 1.875 1.078 4.172 0 6a5.95 5.95 0 0 1-5.156 3 5.97 5.97 0 0 1-5.203-3c-1.078-1.828-1.078-4.125 0-6 1.078-1.828 3.047-3 5.203-3' />
    </g>
    <defs>
      <clipPath id='9f0fe8970cc42f8c4b74728553f46ed1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeXlBoldIcon);
export default ForwardRef;
