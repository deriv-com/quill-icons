import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.86 13.39c.507.47.507 1.29 0 1.758l-5.82 5.82c-.704.704-1.915.704-2.618 0l-1.172-1.171-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l2.07-2.07a1.817 1.817 0 0 1 2.617 0l1.211 1.171 5.352-5.351a1.205 1.205 0 0 1 1.757 0m-6.368-4.492c0 .47-.43.86-.898.86-.508 0-.938-.39-.938-.86 0-.468.43-.859.938-.859.469 0 .898.39.898.86M15.195 8h1.367l-1.835 5h-1.368zM9.063 8h3.164v5h-1.211V9.133H9.063zM5 5.5c.664 0 1.25.586 1.25 1.25v15.898c0 .196.156.352.39.352h13.985c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H5.703c-1.133 0-1.953-.82-1.953-1.953V6.75c0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='aac3087b3b19765dbd628b4a5d17bb22__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewLgFillIcon);
export default ForwardRef;
