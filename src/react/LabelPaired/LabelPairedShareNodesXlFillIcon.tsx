import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 16.5c-1.219 0-2.344-.469-3.14-1.219l-4.407 2.203c0 .141.047.328.047.516 0 .234-.047.375-.047.563l4.406 2.203c.797-.75 1.922-1.266 3.141-1.266a4.501 4.501 0 0 1 0 9A4.5 4.5 0 0 1 12 24v-.516l-4.406-2.203A4.57 4.57 0 0 1 4.5 22.5a4.501 4.501 0 0 1 0-9c1.172 0 2.297.516 3.094 1.266L12 12.563V12a4.501 4.501 0 0 1 9 0c0 2.484-2.016 4.5-4.5 4.5' />
    </g>
    <defs>
      <clipPath id='4a1735dbe3dcfb3be741a89e9f8a149d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesXlFillIcon);
export default ForwardRef;
