import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateCaptionRegularIcon = (
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
      <path d='M11.25 14V8H8.625a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v1.5a1.25 1.25 0 0 0-.586.094l-.14.047q0 .023-.024.023V5q.024-.632.445-1.055.423-.421 1.055-.445h3.656q.469 0 .797.328l2.719 2.719q.328.328.328.797V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H5.18q.07-.187.07-.375v-.375h5.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54m0-6.75a.6.6 0 0 0-.117-.164L8.414 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375zm-9.61 4.664a.88.88 0 0 1 .61.352l.164.187.234-.094a.91.91 0 0 1 .704 0l.234.094.164-.187a.88.88 0 0 1 .61-.352l.257-.047.047-.258.727.118-.047.375q-.07.42-.492.492l-.352.047v2.484q0 .21-.187.328a.4.4 0 0 1-.399-.023L3 14.82l-.914.61a.36.36 0 0 1-.375.023q-.21-.117-.211-.328v-2.484l-.352-.047q-.42-.07-.492-.492l-.047-.399a.3.3 0 0 0-.07-.117l-.328-.234q-.305-.282-.164-.657l.14-.375a.22.22 0 0 0 0-.14l-.14-.375q-.142-.376.164-.657l.328-.234.445.586-.187.164.094.234a.91.91 0 0 1 0 .704l-.094.234.187.164-.445.586L.984 11a.97.97 0 0 1 .375.61l.024.257zl-.047.352zm-1.1-3a.3.3 0 0 0 .07-.117l.046-.399q.07-.42.492-.492l.399-.047a.3.3 0 0 0 .117-.07l.234-.328q.282-.305.657-.164l.375.14a.22.22 0 0 0 .14 0l.375-.14q.376-.142.657.164l.234.328a.3.3 0 0 0 .14.07l.399.047q.399.07.469.492l.047.399q.023.07.07.117l.328.234q.305.282.164.657l-.14.375a.22.22 0 0 0 0 .14l.14.375q.142.376-.164.657l-.328.234a.3.3 0 0 0-.07.117l-.727-.094A.88.88 0 0 1 5.016 11l.187-.164-.094-.234a.91.91 0 0 1 0-.704l.094-.234-.187-.164a.88.88 0 0 1-.352-.61l-.047-.257-.258-.024a.97.97 0 0 1-.609-.375l-.164-.187-.234.094-.258-.657.258.657a.91.91 0 0 1-.704 0l-.234-.094-.164.187a.97.97 0 0 1-.61.375l-.257.024-.024.258-.68-.094.68.094a.97.97 0 0 1-.375.609zm3.21 5.508V13.25q-.164.024-.305-.047l-.375-.14a.12.12 0 0 0-.14 0l-.375.14a.5.5 0 0 1-.305.047v1.172l.54-.352a.35.35 0 0 1 .42 0z' />
    </g>
    <defs>
      <clipPath id='39fb44999906fc93dfd96e6fd795853a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateCaptionRegularIcon);
export default ForwardRef;
