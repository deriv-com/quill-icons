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
      <path d='M10.5 14.375a.385.385 0 0 0 .375-.375V7.25H9a.74.74 0 0 1-.75-.75V4.625H4.5A.385.385 0 0 0 4.125 5v1.594a1.42 1.42 0 0 0-.984 0c-.047.023-.118.07-.141.07v.024V5c0-.82.656-1.5 1.5-1.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5H5.18a1 1 0 0 0 .07-.375v-.75zM2.555 7.297l.351.14a.2.2 0 0 0 .164 0l.375-.14a.556.556 0 0 1 .657.187l.234.305c.023.047.07.07.117.07l.399.047a.6.6 0 0 1 .492.492l.047.399c0 .047.023.094.07.117l.328.234a.62.62 0 0 1 .164.68l-.14.352c-.024.047-.024.117 0 .14l.14.375a.55.55 0 0 1-.187.657l-.305.257a.13.13 0 0 0-.07.118l-.047.398a.6.6 0 0 1-.492.492l-.352.047v2.461c0 .14-.094.281-.21.352a.42.42 0 0 1-.376-.024L3 14.843l-.937.61c-.094.07-.258.07-.376.024a.41.41 0 0 1-.187-.352v-2.46l-.375-.048a.6.6 0 0 1-.492-.492l-.047-.398a.13.13 0 0 0-.07-.118l-.305-.257a.55.55 0 0 1-.188-.657l.165-.351v-.164l-.165-.352a.55.55 0 0 1 .188-.656l.305-.258a.13.13 0 0 0 .07-.117l.07-.399a.55.55 0 0 1 .469-.492l.398-.047a.13.13 0 0 0 .118-.07l.257-.305a.55.55 0 0 1 .657-.187M1.5 10.25c0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313 0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29' />
    </g>
    <defs>
      <clipPath id='44b2194bcc9f2556a839287d28f4fdc5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateCaptionBoldIcon);
export default ForwardRef;
