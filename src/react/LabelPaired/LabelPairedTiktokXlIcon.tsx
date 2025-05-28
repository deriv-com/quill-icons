import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokXlIcon = (
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
      <path d='M21 15.844c-2.11.047-4.078-.61-5.766-1.828v8.39c0 3.188-1.968 6-4.968 7.125-2.953 1.125-6.328.282-8.391-2.11a7.68 7.68 0 0 1-.984-8.671c1.5-2.766 4.593-4.312 7.78-3.89v4.218a3.54 3.54 0 0 0-3.937 1.266c-.843 1.265-.843 2.906.047 4.125s2.485 1.734 3.89 1.265a3.52 3.52 0 0 0 2.438-3.328V6h4.125c0 .375 0 .703.094 1.078a5.54 5.54 0 0 0 2.531 3.75c.891.61 2.016.938 3.141.938z' />
    </g>
    <defs>
      <clipPath id='df61856e93d894dca43b04d3432fd85c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokXlIcon);
export default ForwardRef;
