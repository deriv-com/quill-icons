import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 4.625V14h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 14.375C0 14.188.164 14 .375 14h2.25V5.328L.938 6.453a.36.36 0 0 1-.516-.117.36.36 0 0 1 .117-.516l2.25-1.5a.42.42 0 0 1 .375-.023c.117.07.211.21.211.328' />
    </g>
    <defs>
      <clipPath id='5e5e1b12eb09b91d747764b34a06619e__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionRegularIcon);
export default ForwardRef;
