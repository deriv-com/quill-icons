import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightXlRegularIcon = (
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
      <path d='M0 9c0-1.64 1.313-3 3-3h8.484c.797 0 1.547.328 2.11.89l3.515 3.516c.563.563.891 1.313.891 2.11v2.812a5.3 5.3 0 0 0-1.5.61v-3.422c0-.422-.187-.797-.469-1.078l-3.468-3.47a1.53 1.53 0 0 0-1.079-.468H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5h10.875a9.3 9.3 0 0 0 1.547 1.5H3c-1.687 0-3-1.312-3-3zm13.5 14.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C27 27 23.953 30 20.25 30c-3.75 0-6.75-3-6.75-6.75m1.5 0a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m1.5 0c0-.375.328-.75.75-.75h4.172l-1.36-1.312c-.28-.282-.28-.797 0-1.079.282-.28.797-.28 1.079 0l2.625 2.625c.28.282.28.797 0 1.078l-2.625 2.625c-.282.282-.797.282-1.078 0-.282-.28-.282-.796 0-1.078L21.422 24H17.25a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='8cec64c01ff2898e9a74d7511e3f964d__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightXlRegularIcon);
export default ForwardRef;
