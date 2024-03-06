import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondSmBoldIcon = (
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
      <path d='M8.371 3.996A.91.91 0 0 1 9 3.75q.356 0 .629.246l2.625 2.625a.9.9 0 0 1 .246.629.9.9 0 0 1-.246.629l-2.625 2.625A.9.9 0 0 1 9 10.75a.9.9 0 0 1-.629-.246L5.746 7.879A.91.91 0 0 1 5.5 7.25q0-.356.246-.629zM2.22 5.5q.848.027 1.394.574.547.548.575 1.395v3.527a1.97 1.97 0 0 1 1.23-.465q.793 0 1.34.547l1.695 1.695q.3.302.547.684.246-.383.574-.684l1.668-1.695a1.82 1.82 0 0 1 1.34-.547q.711.027 1.23.465V7.47q.028-.848.575-1.395A2.05 2.05 0 0 1 15.78 5.5q.848.027 1.395.574.547.548.574 1.395v5.906q0 1.368-.957 2.324l-1.86 1.86q-.465.383-.93 0-.381-.465 0-.93l1.86-1.86q.575-.573.575-1.394V7.469q-.056-.601-.657-.657-.601.056-.656.657v3.992q0 1.094-.766 1.86l-.437.437-.738.738-.438.438q-.465.383-.93 0-.383-.465 0-.93l.438-.438.738-.738a.56.56 0 0 0 .164-.41q-.054-.52-.574-.574-.245 0-.41.164l-1.695 1.695q-.795.82-.82 1.996v1.395q-.056.601-.657.656-.602-.055-.656-.656v-1.395q-.027-1.176-.82-1.996l-1.696-1.695a.56.56 0 0 0-.41-.164q-.52.054-.574.574 0 .245.164.41l.738.738.438.438q.383.465 0 .93-.465.383-.93 0l-.438-.438-.738-.738-.41-.438a2.63 2.63 0 0 1-.793-1.86V7.47q-.054-.601-.656-.657-.602.056-.656.657v5.906q-.001.82.574 1.395l1.86 1.859q.381.465 0 .93-.465.383-.93 0l-1.86-1.86q-.93-.957-.957-2.324V7.469q.027-.848.574-1.395.548-.546 1.395-.574' />
    </g>
    <defs>
      <clipPath id='2a58f04e1ce75acf2d74be14504cd886__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondSmBoldIcon);
export default ForwardRef;
