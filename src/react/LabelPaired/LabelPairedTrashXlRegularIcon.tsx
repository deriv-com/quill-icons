import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashXlRegularIcon = (
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
      <path d='M8.344 7.5q-.422 0-.656.375L6.984 9h7.032l-.703-1.125q-.236-.375-.657-.375zM15.797 9h4.453q.704.047.75.75-.046.703-.75.75h-.844l-1.218 16.734a2.94 2.94 0 0 1-.938 1.97q-.844.75-2.062.796H5.813q-1.219-.047-2.063-.797a2.94 2.94 0 0 1-.937-1.969L1.593 10.5H.75q-.703-.047-.75-.75.047-.703.75-.75h4.453l1.219-1.922Q7.126 6.047 8.344 6h4.312q1.219.046 1.922 1.078zm2.11 1.5H3.093l1.219 16.594q.046.609.468.984.422.422 1.032.422h9.375q.61 0 1.03-.422.422-.375.47-.984z' />
    </g>
    <defs>
      <clipPath id='154076a403be384bd23d0314b5684bf1__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlRegularIcon);
export default ForwardRef;
