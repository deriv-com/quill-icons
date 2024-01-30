import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.875 7.25V9h6.563q.93.027 1.558.629.601.63.629 1.559v4.374q-.027.93-.629 1.56-.63.6-1.559.628H2.564q-.93-.027-1.56-.629-.6-.63-.628-1.558v-4.376q.027-.93.629-1.558.63-.601 1.559-.629H3V7.25q.027-1.476 1.012-2.488Q5.023 3.777 6.5 3.75q1.203.027 2.105.71a3.55 3.55 0 0 1 1.258 1.806q.082.382-.3.52-.41.081-.547-.274a2.57 2.57 0 0 0-.93-1.367 2.8 2.8 0 0 0-1.586-.52q-1.12.027-1.86.766-.738.738-.765 1.859M1.25 11.188v4.374q.027.547.383.93.382.356.93.383h7.874q.548-.027.93-.383.356-.382.383-.93v-4.374a1.43 1.43 0 0 0-.383-.93 1.43 1.43 0 0 0-.93-.383H2.564a1.43 1.43 0 0 0-.93.383 1.43 1.43 0 0 0-.383.93' />
    </g>
    <defs>
      <clipPath id='16127dce2307ddf486e0e8144b97925c__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockSmRegularIcon);
export default ForwardRef;
