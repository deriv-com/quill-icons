import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M5 13v.39l4.648 2.11c.118.04.235.078.352.078a.7.7 0 0 0 .313-.078L15 13.39V13c0-.664-.586-1.25-1.25-1.25h-7.5C5.547 11.75 5 12.336 5 13m5.82 3.633a1.95 1.95 0 0 1-.82.195c-.312 0-.586-.078-.86-.195L5 14.758V18c0 .703.547 1.25 1.25 1.25h7.5c.664 0 1.25-.547 1.25-1.25v-3.242z' />
    </g>
    <defs>
      <clipPath id='e49d910b7af9a504d41f809ad8efbdf9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeLgFillIcon);
export default ForwardRef;
