import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornCaptionRegularIcon = (
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
      <path d='M9.75 4.531q0-.117-.117-.164-.117-.046-.211.047L8.859 5A7.13 7.13 0 0 1 5.25 7.063v4.148a7 7 0 0 1 3.61 2.039l.562.586q.094.093.21.047.118-.047.118-.164zm-5.25 6.54V7.18q-.21.023-.398.023l-.704.047H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v2.25q0 .328.21.54.212.21.54.21h1.898l.68.047q.21 0 .422.023m4.383-7.173q.492-.445 1.031-.234.54.21.586.867v9.188q-.047.656-.586.867-.54.21-1.031-.234l-.563-.586A6.32 6.32 0 0 0 4.5 11.82v2.367q-.023.563-.375.938-.375.352-.937.375h-.376a1.4 1.4 0 0 1-.937-.375 1.4 1.4 0 0 1-.375-.937V11.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 10.25V8q.024-.632.445-1.055Q.868 6.524 1.5 6.5h1.875l.68-.047a6.6 6.6 0 0 0 2.32-.562A6.4 6.4 0 0 0 8.32 4.484zM2.25 11.75v2.438q.047.514.563.562h.374q.516-.047.563-.562v-2.415l-.375-.023zM11.625 8q.352.023.375.375v1.5q-.023.352-.375.375-.352-.023-.375-.375v-1.5q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='3aaed047594f0f9613694d5a26908f66__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornCaptionRegularIcon);
export default ForwardRef;
