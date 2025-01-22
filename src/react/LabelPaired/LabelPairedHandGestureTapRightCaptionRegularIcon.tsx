import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightCaptionRegularIcon = (
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
      <path d='M12.516 4.25a.25.25 0 0 0-.235.234V14.54c0 .117.117.211.235.211s.234-.094.234-.21V4.483a.25.25 0 0 0-.234-.234M12 8.375c0 .797-.61 1.43-1.383 1.5l-.867 1.852c.023.046.07.093.094.164l.187.351c.164.328.164.703.024 1.031l-.14.282c-.33.703-1.032 1.172-1.782 1.195h-.14a2.04 2.04 0 0 1-1.009-.187l-1.804-.868a1.62 1.62 0 0 1-.774-2.18l.586-1.265c.235-.469.797-.68 1.266-.445 0 0 .023.023.047.023.023.024.047.024.047.047a.96.96 0 0 1 .937-.094c.094.024.14.07.211.117a1 1 0 0 1 .96-.093c.118.047.212.14.282.21l.422-.913a1.46 1.46 0 0 1-.187-.727c0-.82.68-1.5 1.5-1.5.843 0 1.5.68 1.5 1.5zm-.984.703-.141.281c.398-.14.656-.539.656-.984A1.04 1.04 0 0 0 10.5 7.344c-.586 0-1.055.468-1.055 1.031v.164l.07-.164c.188-.398.704-.586 1.102-.398a.85.85 0 0 1 .399 1.101m-2.25 3.61 1.828-3.82a.37.37 0 0 0-.188-.47.38.38 0 0 0-.469.165l-.984 2.109c-.047.094-.14.14-.234.117-.117-.023-.188-.094-.211-.187a.49.49 0 0 0-.258-.375.45.45 0 0 0-.562.164.3.3 0 0 1-.211.093c-.07 0-.141-.046-.188-.117a.6.6 0 0 0-.187-.164.47.47 0 0 0-.563.117c-.047.047-.094.094-.164.094s-.14-.047-.187-.07c-.047-.047-.094-.094-.141-.117a.5.5 0 0 0-.633.234l-.586 1.266a1.17 1.17 0 0 0 .54 1.57l1.804.844c.258.117.516.164.797.14l.14.024a1.68 1.68 0 0 0 1.383-.961l.14-.258c.095-.211.071-.422-.023-.633l-.117-.21-.305.632c-.046.14-.187.188-.304.117-.094-.047-.164-.187-.117-.305' />
    </g>
    <defs>
      <clipPath id='40266bab5312fa4ac4f6d3873512d3a8__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightCaptionRegularIcon);
export default ForwardRef;
