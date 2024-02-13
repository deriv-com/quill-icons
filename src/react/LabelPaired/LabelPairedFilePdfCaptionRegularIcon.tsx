import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfCaptionRegularIcon = (
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
      <path d='M1.5 14.75h.75v.75H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h3.656q.469 0 .797.328l2.719 2.719Q9 6.875 9 7.344v2.906h-.75V8H5.625a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9q0 .328.21.54.212.21.54.21m6.75-7.5a.6.6 0 0 0-.117-.164L5.414 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375zm-4.125 4.5h.75q.563.023.938.375.351.375.375.938-.024.562-.375.937-.375.352-.938.375H4.5v.75q-.023.352-.375.375-.352-.023-.375-.375v-3q.023-.352.375-.375m.75 1.875q.516-.047.563-.562-.048-.516-.563-.563H4.5v1.125zm2.25-1.875h.75q.469.024.797.328.304.329.328.797v1.5a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-.75q-.352-.023-.375-.375v-3q.023-.352.375-.375m.75 3q.352-.023.375-.375v-1.5q-.023-.352-.375-.375H7.5v2.25zm1.875-2.625q.023-.352.375-.375h1.125q.352.023.375.375-.023.352-.375.375h-.75v.75h.75q.352.023.375.375-.023.352-.375.375h-.75v1.125q-.023.352-.375.375-.352-.023-.375-.375v-3' />
    </g>
    <defs>
      <clipPath id='dd769f508db1569f7da6a6c8d6e56e1e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfCaptionRegularIcon);
export default ForwardRef;
