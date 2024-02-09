import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateCaptionBoldIcon = (
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
      <path d='M10.5 14.375q.352-.023.375-.375V7.25H9a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H4.5q-.352.023-.375.375v1.594a1.28 1.28 0 0 0-.96 0l-.142.047q0 .023-.023.023V5q.024-.632.445-1.055.423-.421 1.055-.445h3.89q.61 0 1.055.445l2.11 2.11Q12 6.5 12 7.133V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H5.18q.07-.187.07-.375v-.75zM2.555 7.297l.375.14a.22.22 0 0 0 .14 0l.375-.14q.399-.142.657.164l.257.328q.047.047.118.07l.398.047a.53.53 0 0 1 .469.469l.07.398q0 .07.07.141l.305.234q.305.282.188.657l-.165.375a.22.22 0 0 0 0 .14l.141.375q.142.376-.164.657l-.328.234a.3.3 0 0 0-.07.14l-.047.399a.53.53 0 0 1-.469.469l-.375.047v2.484q0 .21-.187.328a.4.4 0 0 1-.399-.023L3 14.82l-.914.61a.36.36 0 0 1-.375.023q-.21-.117-.211-.328v-2.484l-.375-.047a.53.53 0 0 1-.469-.469l-.047-.398a.3.3 0 0 0-.07-.141l-.328-.234q-.305-.282-.164-.657l.14-.375a.22.22 0 0 0 0-.14l-.14-.375q-.142-.376.164-.657l.328-.234a.3.3 0 0 0 .07-.14l.047-.399q.07-.399.492-.469l.375-.047a.3.3 0 0 0 .141-.07l.234-.328q.282-.305.657-.164M1.5 10.25q.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29' />
    </g>
    <defs>
      <clipPath id='6b1fdc1f532608ebe81d3816bb58f0d9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateCaptionBoldIcon);
export default ForwardRef;
