import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.367 6.008a.26.26 0 0 0-.258-.258h-.984v.516h.984a.26.26 0 0 0 .258-.258m0 .984c0-.117-.117-.234-.258-.234h-.984v.492h.984a.26.26 0 0 0 .258-.258M5.344 9.406l2.039-2.039a2.6 2.6 0 0 1-.094-.75c0-1.71 1.383-3.117 3.094-3.117A3.13 3.13 0 0 1 13.5 6.617v6.89c0 1.102-.914 1.993-2.016 1.993h-6.89A3.09 3.09 0 0 1 1.5 12.406a3.09 3.09 0 0 1 3.094-3.094c.258 0 .515.024.75.094m7.031-.398a3.13 3.13 0 0 1-1.992.703 3.07 3.07 0 0 1-2.485-1.266L6.422 9.922a3.07 3.07 0 0 1 1.266 2.484c0 .75-.258 1.453-.704 1.969h4.5c.493 0 .891-.398.891-.867zm-2.25-4.266h-.516v.516h-.492v.492h.492v1.5h-.492v.516h.492v.492h.516v-.492h.492v.492h.492v-.492c.399 0 .75-.328.75-.75a.73.73 0 0 0-.21-.516.744.744 0 0 0-.047-1.055.7.7 0 0 0-.493-.187v-.516h-.492v.516h-.492zm-5.32 5.883h-.633v.281c-.399.117-.656.492-.656.914 0 .54.422.985.96.985a.37.37 0 0 1 .376.375c0 .187-.165.351-.375.351a.36.36 0 0 1-.352-.351v-.094h-.61v.094c0 .422.258.797.657.914v.281h.633v-.281c.398-.117.656-.492.656-.914a.99.99 0 0 0-.984-.985c-.188 0-.352-.164-.352-.375a.36.36 0 0 1 .352-.351c.21 0 .375.164.375.351v.094h.609v-.094c0-.422-.258-.797-.656-.914zM3.633 6.242a.57.57 0 0 1 .562-.562h2.203c.235 0 .446.14.516.351a.54.54 0 0 1-.117.61l-2.18 2.18c-.21.21-.562.21-.797 0a.58.58 0 0 1 0-.798l1.22-1.218h-.845a.555.555 0 0 1-.562-.563' />
    </g>
    <defs>
      <clipPath id='8c5a4fb1b785a2bb264049296ada0b75__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampCaptionFillIcon);
export default ForwardRef;
