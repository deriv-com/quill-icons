import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoCaptionBoldIcon = (
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
      <path d='M10.43 11.516c.258.234.422.562.422.96 0 .399-.165.727-.422.961-.258.211-.61.329-.961.376-.047 0-.094 0-.117-.024v.234c0 .329-.188.61-.446.797a1.6 1.6 0 0 1-.914.305h-.984c-.469 0-.703-.562-.399-.89a1.6 1.6 0 0 0-.187-.446.6.6 0 0 0-.445-.164.58.58 0 0 0-.422.164c-.07.117-.14.258-.188.445.305.329.07.891-.398.891h-.985c-.351 0-.68-.117-.914-.305a.99.99 0 0 1-.422-.82v-3c0-.14 0-.234-.023-.328 0-.117 0-.188.023-.399v-.75c0-.07 0-.164-.023-.257-.023 0-.07.023-.117 0-.352-.024-.68-.118-.938-.328-.28-.235-.422-.563-.422-.961 0-.399.165-.727.446-.938.258-.187.586-.258.914-.281h.117c.023-.094.023-.188.023-.258 0-.328.188-.61.422-.797a1.6 1.6 0 0 1 .938-.305h.656v-.117c.024-.351.14-.703.375-.96.234-.258.563-.423.961-.423s.727.164.96.422c.235.258.353.61.376.961 0 .047 0 .07-.024.117h.68c.352 0 .68.118.938.305.234.188.422.469.422.797v4.64h.117c.351.024.703.141.96.376m-6.492 2.882h.726v-.14c.024-.328.14-.68.352-.938.234-.258.562-.422.96-.422.399 0 .727.165.962.422.234.258.351.61.375.961.023.047 0 .07 0 .117h.703c.187 0 .351-.07.468-.14.094-.094.141-.164.141-.235v-.539c0-.468.563-.68.89-.398a.7.7 0 0 0 .422-.188.52.52 0 0 0 .188-.421c0-.211-.07-.329-.187-.422a.7.7 0 0 0-.422-.188c-.328.281-.891.047-.891-.422v-.82H7.008c-.469 0-.703-.562-.399-.89a1.2 1.2 0 0 0-.187-.422.56.56 0 0 0-.445-.188.52.52 0 0 0-.422.188c-.094.093-.14.234-.188.421.305.329.07.891-.398.891H3.352V14c0 .094.023.164.14.258s.258.14.446.14m-.586-4.5h1.312v-.117c.024-.351.14-.703.352-.96.234-.258.562-.423.96-.423.399 0 .727.165.962.422.234.258.351.61.375.961.023.047 0 .07 0 .117h1.335V6.5c0-.07-.046-.14-.164-.234q-.175-.141-.492-.141h-.984c-.469 0-.68-.562-.399-.89a.86.86 0 0 0-.187-.446A.58.58 0 0 0 6 4.625a.58.58 0 0 0-.422.164.86.86 0 0 0-.187.445c.28.329.046.891-.422.891h-.961c-.211 0-.399.047-.516.14-.094.094-.14.165-.14.235v.023c0 .047 0 .211-.024.375 0 .07-.023.165-.047.258-.023.07-.07.211-.187.305a.66.66 0 0 1-.352.094c-.07-.024-.14-.047-.187-.07-.024 0-.024-.024-.024-.024-.258.023-.422.094-.515.164s-.164.164-.164.352.07.304.164.398a.95.95 0 0 0 .515.188c0-.024 0-.024.024-.024.047-.023.117-.047.187-.07.117 0 .235.023.352.094.117.093.164.234.187.304.024.094.047.188.047.258.024.164.024.305.024.375z' />
    </g>
    <defs>
      <clipPath id='2b5c6f5b5401ddbccaadca2be98d8454__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoCaptionBoldIcon);
export default ForwardRef;
