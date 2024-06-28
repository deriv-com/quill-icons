import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.031 13.078 11.11 18l4.922 4.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L9 20.155l-4.969 4.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L6.845 18l-4.922-4.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L9 15.892l4.922-4.922a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11' />
    </g>
    <defs>
      <clipPath id='2c95c467765e515474c4d3ec9ce39233__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlFillIcon);
export default ForwardRef;
