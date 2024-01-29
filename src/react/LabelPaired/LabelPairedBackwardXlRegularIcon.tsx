import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.781 18 12 25.406V10.594zm10.313-9q.609 0 .984.422.422.375.422.984v4.828l8.25-5.953q.375-.28.844-.281.609 0 .984.422.422.375.422.984v15.188q0 .609-.422.984-.375.422-.984.422-.47 0-.844-.281l-8.25-5.953v4.828q0 .609-.422.984-.375.422-.984.422-.47 0-.844-.281L.469 18.89A1.03 1.03 0 0 1 0 18q0-.563.469-.89L11.25 9.28q.375-.28.844-.281m1.406 9.89 9 6.516V10.594l-9 6.515z' />
    </g>
    <defs>
      <clipPath id='6d33e4cf07335bcc3d8f4f769bf251c6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlRegularIcon);
export default ForwardRef;
