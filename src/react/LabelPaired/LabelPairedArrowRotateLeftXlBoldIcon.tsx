import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 16.5c-.656 0-1.125-.469-1.125-1.125v-6.75c0-.61.469-1.125 1.125-1.125C2.485 7.5 3 8.016 3 8.625v3.797l.938-1.125C5.859 9 8.718 7.5 12 7.5c5.766 0 10.5 4.734 10.5 10.5 0 5.813-4.734 10.5-10.5 10.5-2.39 0-4.547-.75-6.328-2.062-.469-.375-.61-1.079-.234-1.594.375-.516 1.078-.61 1.593-.235 1.36 1.032 3.094 1.641 4.969 1.641A8.23 8.23 0 0 0 20.25 18c0-4.547-3.703-8.25-8.25-8.25-2.578 0-4.828 1.172-6.375 3l-1.266 1.5h4.266c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 8.625 16.5z' />
    </g>
    <defs>
      <clipPath id='94ba2f0b029a8bdc17255df12b8f5e71__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftXlBoldIcon);
export default ForwardRef;
