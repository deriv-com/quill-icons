import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.898 21.125q2.15-2.265 2.227-5.625-.078-3.438-2.383-5.742Q13.438 7.454 10 7.375q-3.438.078-5.742 2.383-2.304 2.304-2.383 5.742.078 3.36 2.266 5.625a4.8 4.8 0 0 1 1.797-2.266q1.21-.82 2.812-.859h2.5q1.601.04 2.813.86a5.05 5.05 0 0 1 1.835 2.265m-1.601 1.25h.039a3.4 3.4 0 0 0-1.094-1.797q-.82-.664-1.992-.703h-2.5q-1.171.039-1.992.703a3.18 3.18 0 0 0-1.055 1.797q1.875 1.21 4.297 1.25 2.422-.04 4.297-1.25M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m0-10.625q.899-.04 1.367-.781a1.66 1.66 0 0 0 0-1.563Q10.9 11.79 10 11.75q-.899.04-1.367.781a1.66 1.66 0 0 0 0 1.563q.468.742 1.367.781m-3.437-1.562q.078-1.954 1.718-2.97 1.719-.936 3.438 0 1.64 1.016 1.719 2.97-.08 1.953-1.72 2.968-1.717.938-3.437 0-1.64-1.015-1.719-2.968' />
    </g>
    <defs>
      <clipPath id='3789452a876280cd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserLgBoldIcon);
export default ForwardRef;
