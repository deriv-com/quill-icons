import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightXlFillIcon = (
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
      <path d='m20.531 19.078-7.5 7.5c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l4.923-4.968H1.5A1.48 1.48 0 0 1 0 18c0-.797.656-1.5 1.5-1.5h14.344l-4.922-4.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l7.5 7.5c.609.563.609 1.548 0 2.11' />
    </g>
    <defs>
      <clipPath id='1531bad7185e92c5c901ac97bf77d836__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlFillIcon);
export default ForwardRef;
