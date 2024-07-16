import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.125 11.75a5 5 0 0 1-1.406 3.477c1.21.937 2.031 2.382 2.031 4.023 0 2.773-2.266 5-5 5h-2.5c-2.773 0-5-2.227-5-5 0-1.64.781-3.086 2.031-4.023-.898-.899-1.406-2.11-1.406-3.477 0-2.734 2.227-5 5-5h1.25c2.734 0 5 2.266 5 5m-5 5H5.25a2.49 2.49 0 0 0-2.5 2.5c0 1.406 1.094 2.5 2.5 2.5h2.5c1.367 0 2.5-1.094 2.5-2.5 0-1.367-1.133-2.5-2.5-2.5zm0-2.5c1.367 0 2.5-1.094 2.5-2.5 0-1.367-1.133-2.5-2.5-2.5h-1.25a2.49 2.49 0 0 0-2.5 2.5c0 1.406 1.094 2.5 2.5 2.5z' />
    </g>
    <defs>
      <clipPath id='4b4f5efe74dc4588d3001ac4a9e53dfe__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightLgFillIcon);
export default ForwardRef;
