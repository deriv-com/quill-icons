import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.43 6.383h-.047q-.023 0-.047-.024 0-.023.023-.023a.12.12 0 0 1 .141 0q.047.024.07.07-.023.024-.07.024-.024 0-.047-.024-.024 0-.023-.023m-.516.047q-.047 0-.07-.024 0-.046.07-.07a.12.12 0 0 1 .14 0q.024 0 0 .023 0 .024-.046.024h-.024l-.023.023q-.023.024-.047.024m5.18 6.539q.375.422.351.68-.023.28-.304.445-.165.093-.352.187-.492.188-.844.563-.54.61-1.148.656-.61.047-.938-.54a.3.3 0 0 1-.046-.163q-.423 0-.75-.047a4 4 0 0 0-.563-.047 4 4 0 0 0-.68.094 5 5 0 0 1-.445.07.85.85 0 0 1-.61.469q-.585.117-1.312-.258a3.2 3.2 0 0 0-.96-.234 18 18 0 0 1-.423-.047q-.328-.047-.468-.281-.141-.258.046-.75a1.1 1.1 0 0 0 0-.446q0-.022-.023-.047a2 2 0 0 1-.023-.28q0-.142.07-.282.187-.282.445-.352.024 0 .047-.023a.8.8 0 0 0 .352-.164 1 1 0 0 0 .14-.188 2 2 0 0 1 .235-.28q-.07-.61.14-1.243.234-.68.633-1.29.399-.585.727-.983.515-.75.539-1.524 0-.165-.024-.445a7 7 0 0 1 0-1.149q.047-.609.446-1.078.398-.468 1.406-.492.89.024 1.265.516t.47 1.172q.07.68.046 1.265v.117q0 .516.211.914a5 5 0 0 0 .563.774q.28.328.585.773.306.445.493.985.374.867.093 1.851l.094.047a.4.4 0 0 1 .094.07q.21.212.258.516v.023q.046.282.164.446M5.5 5.539a.85.85 0 0 0-.07.516 1 1 0 0 1 .304.117.56.56 0 0 1 .047-.399q.093-.164.235-.14.14 0 .21.21a.65.65 0 0 1 0 .423.15.15 0 0 1-.07.07l-.023.023q.234.094.281.118.305-.375.117-.938-.21-.375-.515-.375-.33 0-.516.375m-.96-.258q-.33.048-.4.469-.07.445.212.75.187-.141.14-.117v-.024a.5.5 0 0 1-.14-.375q.023-.235.164-.28.117 0 .187.163a.5.5 0 0 1 .047.305q.117-.07.234-.117a.94.94 0 0 0-.117-.563q-.14-.21-.328-.21m-.33 1.43v-.024q-.14.118-.093.305t.352.352q.117.07.21.164.119.117.258.187.094.048.235.047.398 0 .633-.21a.8.8 0 0 1 .258-.141q.421-.141.515-.422.094-.305-.234-.422a1.5 1.5 0 0 0-.282-.094 1.3 1.3 0 0 1-.257-.117q-.352-.235-.61-.211-.445.07-.61.305-.022 0-.022.023a2.3 2.3 0 0 0-.352.258m.095 7.828a1.04 1.04 0 0 0-.164-.516 5 5 0 0 0-.399-.539 3.5 3.5 0 0 1-.398-.562l-.469-.844q-.234-.328-.516-.375-.257-.046-.398.164a2 2 0 0 0-.164.188l-.188.234a.86.86 0 0 1-.351.188l-.094.046a.5.5 0 0 0-.351.258q-.094.187-.024.469v.07a.9.9 0 0 1 0 .492q-.141.47-.047.633.165.235.75.258.516 0 1.031.258.587.281 1.149.234.54-.07.633-.656m-.047-.61q.68.422 1.406.329a2.8 2.8 0 0 0 1.29-.516v-.023q.116-.375.14-.656.022-.54.117-.915.093-.467.492-.656.047-.351.305-.398.235-.046.61.117.632.28.515.61h.117a.44.44 0 0 0-.187-.493 1.7 1.7 0 0 0-.54-.328 1.7 1.7 0 0 0-.023-.844 2.6 2.6 0 0 0-.352-.797 2.7 2.7 0 0 0-.468-.586q-.095 0 .07.165.234.21.492.773.258.562.047 1.219a.8.8 0 0 0-.258-.047 4.5 4.5 0 0 0-.258-.914 4 4 0 0 0-.28-.586 6.3 6.3 0 0 1-.47-1.055q-.257-.633-.421-1.195-.165.234-.516.351l-.234.118-.141.093q-.516.305-.984-.023a1 1 0 0 1-.118-.094.7.7 0 0 0-.187-.14 1 1 0 0 0-.14-.118A4.3 4.3 0 0 1 4 8.492q-.234.61-.469 1.102-.093.21-.164.375a3.9 3.9 0 0 0-.328 1.453q-.351-.54-.234-1.078.117-.563.304-.867.305-.586.188-.493-.165.258-.352.633a3 3 0 0 0-.28.774 1.8 1.8 0 0 0 0 .82q.115.399.585.703.024 0 .328.211.304.21.563.54.258.35.187.585-.117.235-.398.21.187.213.328.47m6.047-.28q.023-.165-.328-.563a1.03 1.03 0 0 1-.188-.516q-.047-.305-.21-.468a.6.6 0 0 0-.493-.118h-.047a1.1 1.1 0 0 1-.398.282q-.258.14-.493.093-.421-.164-.445-.68H7.68q-.235.14-.328.493-.071.375-.094.914a2.8 2.8 0 0 1-.14.656 7 7 0 0 0-.095.305A1.4 1.4 0 0 0 7 14.89q.282.492.797.445t1.031-.586a2.5 2.5 0 0 1 .914-.633q.492-.187.563-.469m-6-6.657q-.094-.14-.024-.164.048.024.07.07 0 .024.024.047.07.07.188.164.21.212.585.235.4-.048.68-.235.117-.07.258-.187a.3.3 0 0 0 .07-.047l.07-.07q.025-.048.07-.047.095.023-.07.14-.14.141-.351.258-.327.21-.727.235-.421-.024-.656-.235l-.164-.164z' />
    </g>
    <defs>
      <clipPath id='70fba08cc1c9c4fa315a336c8878a7e1__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxCaptionIcon);
export default ForwardRef;
