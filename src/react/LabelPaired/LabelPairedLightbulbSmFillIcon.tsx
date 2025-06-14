import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.688 14.25H3.313c-.274-.848-.82-1.613-1.368-2.352l-.41-.574a4.8 4.8 0 0 1-.847-2.761A4.8 4.8 0 0 1 5.5 3.75c2.652 0 4.813 2.16 4.813 4.84 0 1.012-.329 1.941-.876 2.734l-.41.574c-.547.739-1.093 1.504-1.34 2.352M5.5 17.75a2.16 2.16 0 0 1-2.187-2.187v-.438h4.374v.438c0 1.23-.984 2.187-2.187 2.187M3.313 8.563c0-1.204.957-2.188 2.187-2.188a.45.45 0 0 0 .438-.437A.47.47 0 0 0 5.5 5.5a3.075 3.075 0 0 0-3.062 3.063c0 .246.19.437.437.437a.45.45 0 0 0 .438-.437' />
    </g>
    <defs>
      <clipPath id='e831259aeacc0be9cff3890a6611e168__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbSmFillIcon);
export default ForwardRef;
