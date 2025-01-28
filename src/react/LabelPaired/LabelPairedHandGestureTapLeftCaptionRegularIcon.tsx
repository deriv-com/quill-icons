import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftCaptionRegularIcon = (
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
      <path d='M2.46 4.25c-.116 0-.21.117-.21.234V14.54c0 .117.094.211.21.211.118 0 .235-.094.235-.21V4.483a.25.25 0 0 0-.234-.234M3 8.375c0-.82.68-1.5 1.5-1.5s1.5.68 1.5 1.5c0 .281-.07.516-.187.727l.445.914c.07-.07.164-.164.281-.211a.96.96 0 0 1 .938.093 1 1 0 0 1 .21-.117.96.96 0 0 1 .938.094l.047-.047c.023 0 .047-.023.07-.023.445-.235 1.031-.024 1.242.445l.61 1.266c.375.82.023 1.804-.797 2.18l-1.781.867c-.328.14-.657.21-1.008.187h-.164c-.75-.023-1.453-.492-1.782-1.195l-.117-.282a1.08 1.08 0 0 1 .024-1.03l.187-.352c.024-.07.047-.118.07-.164L4.36 9.875A1.486 1.486 0 0 1 3 8.375m.96.703h.024c-.21-.398-.023-.914.375-1.101a.85.85 0 0 1 1.102.398l.07.164v-.164A1.04 1.04 0 0 0 4.5 7.344c-.586 0-1.055.468-1.055 1.031 0 .445.282.844.657.984zm2.25 3.61c.048.117-.022.257-.116.304-.117.07-.258.024-.305-.117l-.305-.633-.117.235a.7.7 0 0 0 0 .609l.117.258c.258.539.774.914 1.383.96l.14-.023c.282.024.54-.023.798-.14l1.804-.844c.586-.281.82-.985.563-1.57l-.61-1.266c-.117-.234-.398-.328-.632-.234-.047.023-.094.07-.14.117-.048.023-.118.07-.188.07-.047 0-.118-.047-.165-.094a.47.47 0 0 0-.562-.117c-.07.047-.14.094-.187.164s-.118.117-.188.117a.3.3 0 0 1-.21-.093.45.45 0 0 0-.563-.164.49.49 0 0 0-.258.375c-.024.093-.094.164-.211.187-.094.024-.188-.023-.235-.117l-.984-2.11a.38.38 0 0 0-.469-.164c-.187.094-.258.305-.164.47z' />
    </g>
    <defs>
      <clipPath id='e396244f88c954b544fec7e04a4f0ef6__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftCaptionRegularIcon);
export default ForwardRef;
