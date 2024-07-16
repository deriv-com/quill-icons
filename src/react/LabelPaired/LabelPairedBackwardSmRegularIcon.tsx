import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardSmRegularIcon = (
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
      <path d='M1.012 10.75 7 15.098V6.43zM7.055 5.5c.437 0 .82.383.82.82v2.844l4.813-3.5q.204-.165.492-.164c.437 0 .82.383.82.82v8.86c0 .465-.383.82-.82.82a.95.95 0 0 1-.492-.137l-4.813-3.5v2.817c0 .465-.383.82-.82.82a.95.95 0 0 1-.492-.137L.245 11.297A.69.69 0 0 1 0 10.75c0-.191.082-.383.246-.52l6.317-4.566q.204-.165.492-.164m.82 5.797 5.25 3.8V6.43l-5.25 3.8z' />
    </g>
    <defs>
      <clipPath id='08ede3fd2be581bfe1051d915734be1a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmRegularIcon);
export default ForwardRef;
