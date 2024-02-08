import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.316 3.887 5.31 7.03q1.23-1.23 3.035-1.476V4.406q.054-.601.656-.656.602.054.656.656v1.149Q11.46 5.8 12.72 7.03q1.23 1.258 1.504 3.063h1.12q.602.054.657.656-.055.602-.656.656h-1.121a5.6 5.6 0 0 1-.711 2.051l3.992 3.117q.438.411.11.93-.411.438-.93.11L.496 4.925q-.437-.411-.11-.93.411-.437.93-.11m5.032 3.965 1.066.82q.657-.52 1.586-.547 1.12.027 1.86.766.738.738.765 1.859 0 .574-.219 1.066l1.067.82q.465-.846.464-1.886-.054-1.668-1.148-2.79Q10.67 6.869 9 6.814q-1.56.027-2.652 1.039m3.965 3.09h-.028a.8.8 0 0 0 .027-.192 1.43 1.43 0 0 0-.382-.93A1.43 1.43 0 0 0 9 9.437q-.273 0-.492.083zm1.285 4.374a5.7 5.7 0 0 1-1.942.657v1.12q-.054.602-.656.657-.602-.055-.656-.656v-1.121q-1.805-.274-3.063-1.504-1.23-1.23-1.476-3.063H2.656q-.601-.054-.656-.656.054-.602.656-.656h1.149q.027-.41.164-.793l1.12.902a6 6 0 0 0-.027.547q.055 1.668 1.149 2.79Q7.33 14.66 9 14.687q.765 0 1.45-.274z' />
    </g>
    <defs>
      <clipPath id='63b29d07dfa92b4c77217d9e18c34b81__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashSmBoldIcon);
export default ForwardRef;
