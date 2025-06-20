import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.75 13c0-3.437-2.812-6.25-6.25-6.25A6.243 6.243 0 0 0 1.25 13c0 .625.195 1.445.625 2.5a21.6 21.6 0 0 0 1.719 3.203c1.328 2.149 2.89 4.219 3.906 5.469.977-1.25 2.54-3.32 3.906-5.469.664-1.094 1.25-2.187 1.68-3.203.43-1.055.664-1.875.664-2.5M15 13c0 3.438-4.57 9.492-6.602 12.031a1.178 1.178 0 0 1-1.835 0C4.57 22.492 0 16.438 0 13c0-4.14 3.36-7.5 7.5-7.5S15 8.86 15 13m-9.375 0c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602M7.5 16.125a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126.586-.937 1.601-1.562 2.734-1.562 1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.124-.586.977-1.601 1.563-2.695 1.563' />
    </g>
    <defs>
      <clipPath id='45868ab8b8ca59736f55fb23da4bc92d__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotLgRegularIcon);
export default ForwardRef;
