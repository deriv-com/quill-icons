import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightXlFillIcon = (
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
      <path d='M0 9c0-1.64 1.313-3 3-3h8.484c.797 0 1.547.328 2.11.89l3.515 3.516c.563.563.891 1.313.891 2.11v2.812c-3.469.985-6 4.172-6 7.922 0 2.766 1.36 5.25 3.422 6.75H3c-1.687 0-3-1.312-3-3zm13.5 14.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C27 27 23.953 30 20.25 30c-3.75 0-6.75-3-6.75-6.75m3 0c0 .422.328.75.75.75h4.172l-1.36 1.36c-.28.28-.28.796 0 1.078.282.28.797.28 1.079 0l2.625-2.625c.28-.282.28-.797 0-1.079L21.14 20.11c-.282-.28-.797-.28-1.078 0-.282.282-.282.797 0 1.078l1.359 1.313H17.25c-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='2efd361ede3698831de7d02fdeee3424__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightXlFillIcon);
export default ForwardRef;
