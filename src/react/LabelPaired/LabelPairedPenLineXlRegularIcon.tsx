import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineXlRegularIcon = (
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
      <path d='M20.156 7.875q-.797-.655-1.593 0l-2.579 2.531 3.61 3.61 2.531-2.578q.657-.798 0-1.594zM3.891 22.5a3.4 3.4 0 0 0-.75 1.313l-1.266 4.312 4.313-1.266q.75-.234 1.312-.75l11.016-11.015-3.61-3.61zM17.484 6.797q.798-.75 1.875-.75 1.032 0 1.828.75l2.016 2.016q.75.796.75 1.828 0 1.077-.75 1.875L8.531 27.188a4.44 4.44 0 0 1-1.875 1.125l-5.672 1.64q-.468.14-.75-.187-.327-.282-.187-.703l1.64-5.672q.33-1.125 1.172-1.922zM11.25 28.5h15q.704.046.75.75-.046.704-.75.75h-15q-.703-.046-.75-.75.047-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='aa43cc152c2980651d5b0c4bb09b92f2__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlRegularIcon);
export default ForwardRef;
