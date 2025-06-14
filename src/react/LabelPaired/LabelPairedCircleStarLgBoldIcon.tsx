import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarLgBoldIcon = (
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
      <path d='M10 7.375c-2.93 0-5.586 1.563-7.07 4.063-1.446 2.539-1.446 5.624 0 8.124A8.13 8.13 0 0 0 10 23.626c2.89 0 5.547-1.523 7.031-4.062 1.446-2.5 1.446-5.586 0-8.125-1.484-2.5-4.14-4.063-7.031-4.063M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m0-15.273c.234 0 .43.156.547.351l1.21 2.5 2.735.39c.235.04.43.196.508.43a.61.61 0 0 1-.156.625l-1.992 1.915.468 2.734a.65.65 0 0 1-.234.625c-.195.117-.469.156-.664.039L10 18.546l-2.46 1.29c-.196.117-.47.078-.665-.04a.65.65 0 0 1-.234-.624l.468-2.735-1.992-1.914a.61.61 0 0 1-.156-.625.64.64 0 0 1 .508-.43l2.734-.39 1.211-2.5c.117-.195.313-.351.586-.351' />
    </g>
    <defs>
      <clipPath id='44d09fe2f55d8a5ec1957ce27f8fd542__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarLgBoldIcon);
export default ForwardRef;
