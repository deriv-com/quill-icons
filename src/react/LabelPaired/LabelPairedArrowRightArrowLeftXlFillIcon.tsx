import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftXlFillIcon = (
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
      <path d='m20.531 13.078-4.5 4.5c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l1.923-1.968H1.5A1.48 1.48 0 0 1 0 12c0-.797.656-1.5 1.5-1.5h14.344l-1.922-1.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l4.5 4.5c.609.563.609 1.548 0 2.11m-15.61 16.5-4.5-4.5a1.445 1.445 0 0 1 0-2.11l4.5-4.5a1.445 1.445 0 0 1 2.11 0c.61.563.61 1.548 0 2.11L5.11 22.5H19.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H5.11l1.921 1.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0' />
    </g>
    <defs>
      <clipPath id='1bd43937d69a3108b2b9e61c1bace44d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlFillIcon);
export default ForwardRef;
