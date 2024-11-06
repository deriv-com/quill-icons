import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.688 9h-3.5a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h2.351A5.25 5.25 0 0 0 7 5.5a5.25 5.25 0 0 0-5.25 5.25A5.25 5.25 0 0 0 7 16a5.28 5.28 0 0 0 4.402-2.379.51.51 0 0 1 .41-.246c.329 0 .547.355.356.656C11.102 15.754 9.16 16.875 7 16.875A6.115 6.115 0 0 1 .875 10.75C.875 7.387 3.609 4.625 7 4.625c2.215 0 4.156 1.203 5.25 2.98V5.062a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v3.5a.45.45 0 0 1-.437.437' />
    </g>
    <defs>
      <clipPath id='51356aaadeec61710fba896380512ff9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightSmRegularIcon);
export default ForwardRef;
