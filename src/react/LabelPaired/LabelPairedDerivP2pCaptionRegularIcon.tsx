import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDerivP2pCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.5 7.813c-.14 0-.305.023-.492.023l-.516.07v3.328h.75V10.11H4.5c.492 0 .89-.093 1.148-.28.282-.165.422-.47.422-.868 0-.399-.14-.703-.398-.867-.281-.188-.656-.281-1.172-.281m.047.656c.117 0 .21 0 .305.023.093.024.164.047.234.07.07.047.117.094.14.165.047.046.047.14.047.234 0 .187-.046.328-.187.398-.14.07-.328.094-.586.094h-.258v-.96c.047 0 .094-.024.14-.024zm3.867.281c0-.14-.023-.281-.07-.398a.892.892 0 0 0-.211-.305c-.094-.07-.211-.14-.352-.188a1.61 1.61 0 0 0-.515-.07c-.211 0-.422.047-.61.14-.187.071-.351.188-.492.329l.352.492a.512.512 0 0 1 .117-.07.42.42 0 0 1 .164-.117c.047-.047.117-.07.21-.094.071-.047.141-.047.235-.047.117 0 .235.023.305.07.094.07.117.164.117.305 0 .07 0 .14-.047.21a2.16 2.16 0 0 1-.117.188l-.187.188-.211.21c-.094.095-.211.188-.305.282-.094.094-.188.21-.281.328-.07.117-.141.235-.188.352-.047.14-.07.28-.07.445v.234h2.25v-.609H7.055a.511.511 0 0 0 .07-.117c.047-.047.094-.094.14-.164.07-.047.118-.117.165-.164l.164-.164.281-.282c.117-.093.188-.187.281-.304.07-.094.14-.211.188-.328a.94.94 0 0 0 .07-.352m1.5-.937h.024c-.141 0-.305.023-.493.023-.187.023-.375.047-.539.07v3.328h.774V10.11h.234c.492 0 .89-.093 1.172-.28.258-.165.398-.47.398-.868 0-.399-.14-.703-.398-.867-.281-.188-.656-.281-1.172-.281m.07.656c.094 0 .211 0 .282.023.093.024.187.047.234.07.07.047.117.094.14.165.047.046.07.14.07.234 0 .187-.07.328-.21.398-.117.07-.328.094-.586.094H9.68v-.96c.023 0 .07-.024.117-.024zM11.25 4.25h-7.5c-.844 0-1.5.68-1.5 1.5v7.5c0 .844.656 1.5 1.5 1.5h7.5c.82 0 1.5-.656 1.5-1.5v-7.5c0-.82-.68-1.5-1.5-1.5m-7.5-.75h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 3.75 3.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pCaptionRegularIcon);
export default ForwardRef;
