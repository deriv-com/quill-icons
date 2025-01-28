import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeSmRegularIcon = (
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
      <path d='M1.75 6.375a.88.88 0 0 0-.875.875v1.094l5.332 3.937a1.36 1.36 0 0 0 1.559 0l5.359-3.937V7.25a.9.9 0 0 0-.875-.875zM.875 9.438v4.812c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875V9.438l-4.84 3.554a2.26 2.26 0 0 1-2.597 0zM0 7.25C0 6.293.766 5.5 1.75 5.5h10.5c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75C.766 16 0 15.234 0 14.25z' />
    </g>
    <defs>
      <clipPath id='c147f27a480b0743053a19ab58c66f7e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmRegularIcon);
export default ForwardRef;
