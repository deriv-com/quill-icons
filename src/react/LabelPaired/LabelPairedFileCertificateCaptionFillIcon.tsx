import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateCaptionFillIcon = (
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
      <path d='M3 5c0-.82.656-1.5 1.5-1.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5H5.18a1 1 0 0 0 .07-.375V13.25c.023 0 .047-.023.07-.023.164-.07.352-.188.492-.375.141-.165.235-.399.258-.633a.5.5 0 0 0 .024-.164c.047-.024.07-.047.14-.094.47-.375.633-.984.422-1.547q-.07-.105-.07-.14c0-.047.023-.094.07-.165.211-.539.047-1.171-.422-1.546-.07-.047-.093-.07-.14-.094 0-.047 0-.094-.024-.164A1.294 1.294 0 0 0 4.945 7.18c-.07-.024-.117-.024-.164-.024-.023-.023-.047-.07-.093-.14a1.305 1.305 0 0 0-1.547-.399c-.047.024-.118.047-.141.07zm9 1.5H9v-3zm-9.445.797.375.14c.023.024.093.024.14 0l.352-.14a.62.62 0 0 1 .68.164l.234.328c.023.047.07.07.117.07l.399.047a.6.6 0 0 1 .492.492l.047.399c0 .047.023.094.07.117l.305.234c.21.165.28.422.187.657l-.14.375a.2.2 0 0 0 0 .164l.14.351c.094.235.024.516-.164.657l-.328.257a.13.13 0 0 0-.07.118l-.047.398a.6.6 0 0 1-.492.492l-.352.047v2.461c0 .14-.094.281-.21.352a.42.42 0 0 1-.376-.024L3 14.843l-.937.61c-.094.07-.258.07-.376.024a.41.41 0 0 1-.187-.352v-2.46l-.375-.048a.55.55 0 0 1-.469-.492l-.07-.398a.13.13 0 0 0-.07-.118l-.305-.257a.55.55 0 0 1-.188-.657l.165-.375v-.14l-.165-.352a.55.55 0 0 1 .188-.656l.305-.258a.13.13 0 0 0 .07-.117l.047-.399a.6.6 0 0 1 .492-.492l.398-.047a.13.13 0 0 0 .118-.07l.257-.305a.55.55 0 0 1 .657-.187M4.5 10.25c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313' />
    </g>
    <defs>
      <clipPath id='aa2f1984d00fe2463a37c6c1d31b776a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateCaptionFillIcon);
export default ForwardRef;
