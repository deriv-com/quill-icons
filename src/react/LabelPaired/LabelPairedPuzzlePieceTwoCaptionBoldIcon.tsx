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
      <path d='M5.063 10.016V8.609c-.094.024-.188.047-.282.047a.81.81 0 0 1-.633-.328 1.2 1.2 0 0 1-.21-.703c0-.258.07-.516.21-.703a.81.81 0 0 1 .633-.328c.094 0 .188.023.282.047v-.446a.67.67 0 0 1 .656-.656h.797a.6.6 0 0 1-.07-.281c0-.258.163-.492.35-.633a1.134 1.134 0 0 1 1.384 0 .81.81 0 0 1 .328.633c0 .094 0 .187-.047.281h.797c.375 0 .656.305.656.656v4.735a.6.6 0 0 1 .281-.07c.258 0 .492.163.633.35.14.188.211.423.211.68q0 .422-.21.704a.81.81 0 0 1-.634.328c-.093 0-.187 0-.28-.047v1.102a.67.67 0 0 1-.657.656H8.039a.37.37 0 0 1-.375-.375c0-.14.047-.235.094-.305.07-.047.094-.094.094-.164 0-.094-.141-.281-.375-.281-.258 0-.375.187-.375.281 0 .07 0 .117.07.164.047.07.117.164.117.305 0 .21-.187.375-.398.375H5.719c-.352 0-.657-.422-.657-.774v-3.843m2.789-4.922a.6.6 0 0 0-.375-.117.58.58 0 0 0-.352.117c-.07.047-.117.117-.117.164s.047.117.14.187c.094.047.141.164.141.305 0 .188-.14.352-.351.352h-1.22a.1.1 0 0 0-.093.093v.89a.36.36 0 0 1-.352.353c-.14 0-.257-.07-.304-.165-.07-.093-.14-.117-.188-.117s-.117.024-.164.117c-.07.07-.117.188-.117.352 0 .14.047.281.117.352.047.093.117.117.164.117s.117-.024.188-.117c.047-.094.164-.165.304-.165.188 0 .329.165.329.352v1.547c0 .047.07.07.117.094h.797c-.047-.094-.047-.188-.047-.282a.81.81 0 0 1 .328-.632 1.134 1.134 0 0 1 1.383 0c.187.14.351.375.351.632a.6.6 0 0 1-.07.282h.844c.047 0 .047-.047.047-.094V6.195c0-.047-.024-.093-.094-.093H8.039c-.21 0-.375-.165-.375-.352 0-.14.07-.258.164-.305.094-.07.117-.14.117-.187a.2.2 0 0 0-.093-.164m-2.133 5.273c-.07 0-.117.047-.117.094v3.516c0 .046.023.093.093.093h.89c-.046-.07-.046-.164-.046-.28 0-.493.445-.798.938-.798.468 0 .937.305.937.797a.5.5 0 0 1-.07.281h.914c.047 0 .094-.023.094-.093V12.43a.36.36 0 0 1 .351-.352c.14 0 .258.07.305.164.07.094.14.117.187.117s.117-.023.164-.117c.07-.07.118-.21.118-.351 0-.164-.047-.282-.118-.352-.046-.094-.117-.117-.164-.117s-.117.023-.187.117c-.047.094-.164.164-.305.164a.36.36 0 0 1-.351-.351v-.891c0-.047-.024-.094-.07-.094H8.038a.345.345 0 0 1-.351-.351c0-.141.046-.258.14-.305.094-.07.14-.14.14-.188 0-.046-.046-.117-.116-.164a.58.58 0 0 0-.352-.117.6.6 0 0 0-.375.117.2.2 0 0 0-.094.164c0 .047.024.118.117.188.094.047.165.164.165.305 0 .187-.165.351-.375.351H5.719' />
    </g>
    <defs>
      <clipPath id='129cec84ffaec376b56d492d0339a1ed__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoCaptionBoldIcon);
export default ForwardRef;
