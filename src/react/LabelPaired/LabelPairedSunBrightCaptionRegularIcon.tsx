import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightCaptionRegularIcon = (
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
      <path d='M6 3.5q.352.023.375.375V5.75q-.023.352-.375.375-.352-.023-.375-.375V3.875Q5.648 3.523 6 3.5m-6 6q.023-.352.375-.375H2.25q.352.023.375.375-.023.352-.375.375H.375Q.023 9.852 0 9.5m9.375 0q.023-.352.375-.375h1.875q.352.023.375.375-.023.352-.375.375H9.75q-.352-.023-.375-.375M6 12.875q.352.023.375.375v1.875q-.023.352-.375.375-.352-.023-.375-.375V13.25q.023-.352.375-.375M1.758 5.258q.257-.21.539 0l1.312 1.336q.212.257 0 .515-.257.236-.515 0L1.758 5.797q-.21-.281 0-.54m0 8.484q-.21-.258 0-.539l1.336-1.312q.258-.212.515 0 .236.258 0 .515l-1.312 1.336q-.281.21-.54 0M8.39 7.11q-.211-.257 0-.515l1.312-1.336q.281-.21.54 0 .21.258 0 .539L8.905 7.109q-.258.212-.515 0m0 4.782q.258-.212.515 0l1.336 1.312q.21.281 0 .54-.258.21-.539 0l-1.312-1.337q-.211-.258 0-.515M7.875 9.5q-.024-1.055-.937-1.617-.937-.516-1.875 0-.915.562-.938 1.617.024 1.054.938 1.617.938.516 1.875 0 .913-.562.937-1.617m-4.5 0q0-.703.352-1.312.351-.61.96-.961A2.6 2.6 0 0 1 6 6.875q.703 0 1.313.352.609.351.96.96.352.61.352 1.313t-.352 1.313a2.6 2.6 0 0 1-.96.96A2.6 2.6 0 0 1 6 12.125q-.703 0-1.312-.352a2.6 2.6 0 0 1-.961-.96A2.6 2.6 0 0 1 3.375 9.5' />
    </g>
    <defs>
      <clipPath id='9c768d3960071f942a23d5f490ae1b94__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightCaptionRegularIcon);
export default ForwardRef;
