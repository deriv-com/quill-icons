import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredSmBoldIcon = (
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
      <path d='M1.031 3.75c.356 0 .657.3.657.656v.766l2.324-.574a4.48 4.48 0 0 1 3.09.355 4.52 4.52 0 0 0 4.02 0l.273-.137c.546-.273 1.23.137 1.23.766v7.629a.86.86 0 0 1-.574.82l-.957.356a4.8 4.8 0 0 1-3.883-.192 4.87 4.87 0 0 0-3.336-.383l-2.187.547v2.735c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656V4.406c0-.355.273-.656.656-.656m.657 4.129 2.187-.465V5.992l-2.187.547zm0 1.34v1.285l2.187-.465V8.754zm0 2.625v1.176l1.859-.465.328-.082v-1.094zm3.5.52a6.4 6.4 0 0 1 2.625.656v-1.368l-1.532-.437a3 3 0 0 0-1.093-.11zm3.937 1.011a3.2 3.2 0 0 0 1.504-.219l.684-.246v-1.285l-.711.164c-.493.137-.985.164-1.477.137zm2.188-3.09V9l-.711.164c-.493.137-.985.164-1.477.137v1.312c.383.028.793 0 1.176-.082zm0-2.625V6.293c-.711.3-1.45.437-2.188.437v1.23c.383.056.793.028 1.176-.054zm-3.5-1.066a6.5 6.5 0 0 1-1.286-.465 3.5 3.5 0 0 0-1.34-.356v1.395q.74-.041 1.477.164l1.149.328zm0 2.433L6.28 8.59a3 3 0 0 0-1.093-.11v1.313q.738-.041 1.476.164l1.149.328z' />
    </g>
    <defs>
      <clipPath id='7e3dbed4410a2ec5df60ca57ad0a46f8__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredSmBoldIcon);
export default ForwardRef;
