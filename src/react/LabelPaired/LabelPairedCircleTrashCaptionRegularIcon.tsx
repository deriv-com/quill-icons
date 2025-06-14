import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m3.75-2.625h.96l.259-.258A.39.39 0 0 1 5.25 6.5h1.5c.094 0 .188.047.258.117l.258.258h.984c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.07l-.258 4.195c-.047.375-.375.68-.75.68H4.805a.74.74 0 0 1-.727-.68l-.281-4.195H3.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m3.68.75H4.547l.258 4.125h2.367z' />
    </g>
    <defs>
      <clipPath id='1d99b59a8e14219d27215e442204effc__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashCaptionRegularIcon);
export default ForwardRef;
