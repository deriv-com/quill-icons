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
      <path d='M1.031 3.75q.602.054.657.656v.766l2.324-.574a4.6 4.6 0 0 1 3.117.328 4.3 4.3 0 0 0 1.996.492q1.04 0 2.023-.492l.247-.11q.465-.218.82.028.383.22.41.71v7.657q-.028.574-.574.82l-.93.356q-1.995.71-3.883-.219a4.98 4.98 0 0 0-3.363-.355l-2.187.546v2.735q-.055.601-.657.656-.601-.055-.656-.656V4.406q.054-.601.656-.656m.657 4.129 2.187-.492V5.992l-2.187.547zm0 1.34v1.285l2.187-.492V8.754zm0 2.625v1.176l1.886-.493q.137-.027.301-.054v-1.094zm3.5.52a6.3 6.3 0 0 1 2.625.628v-1.34l-1.504-.464a2.6 2.6 0 0 0-1.122-.083zm3.937 1.011q.765.055 1.531-.219l.656-.246v-1.285l-.71.164q-.74.165-1.477.11zm2.188-3.09V9l-.711.164q-.74.165-1.477.11v1.312q.601.055 1.203-.082zm0-2.625V6.293q-1.066.438-2.188.437v1.23q.601.055 1.203-.081zm-3.5-1.094a5 5 0 0 1-1.286-.464q-.629-.301-1.34-.329v1.368a5 5 0 0 1 1.477.164l1.149.355zm0 2.461-1.504-.464a2.6 2.6 0 0 0-1.122-.083v1.313q.766-.054 1.477.137l1.149.355z' />
    </g>
    <defs>
      <clipPath id='1a23610b6c34069d04f8b5a02e200c3d__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredSmBoldIcon);
export default ForwardRef;
