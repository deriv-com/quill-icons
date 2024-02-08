import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvCaptionBoldIcon = (
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
      <path d='M1.5 14.375h.75V15.5H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h3.89q.61 0 1.055.445l2.11 2.11Q9 6.5 9 7.133v3.117H7.875v-3H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5q-.352.023-.375.375v9q.023.352.375.375m3.188-2.625h.375q.398 0 .656.281.28.258.281.656v.188q-.023.352-.375.375-.352-.023-.375-.375v-.187q-.024-.165-.187-.188h-.375q-.165.023-.188.188v1.874q.024.165.188.188h.375q.163-.024.187-.187v-.188q.023-.352.375-.375.352.023.375.375v.188a.85.85 0 0 1-.281.656.85.85 0 0 1-.657.281h-.375a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656v-1.876q0-.398.281-.656a.85.85 0 0 1 .657-.281m3.117 0h.82q.352.023.375.375-.023.352-.375.375h-.82q-.282.024-.305.305 0 .187.188.28l.867.4q.609.28.633.96 0 .446-.305.75a1.02 1.02 0 0 1-.75.305H7.125q-.352-.023-.375-.375.023-.352.375-.375h1.008q.28-.024.305-.305 0-.187-.188-.28l-.867-.4q-.609-.28-.633-.96 0-.446.305-.75a1.02 1.02 0 0 1 .75-.305m2.32 0q.352.023.375.375v.75q0 .82.375 1.547.375-.727.375-1.547v-.75q.023-.352.375-.375.352.023.375.375v.75a3.95 3.95 0 0 1-.703 2.273l-.117.188a.36.36 0 0 1-.305.164.36.36 0 0 1-.305-.164l-.117-.188a3.95 3.95 0 0 1-.703-2.273v-.75q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='23dfbce6a734833545f4ddf1ee9a1978__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvCaptionBoldIcon);
export default ForwardRef;
