import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.719 22.125c.515.422.797 1.078.797 1.828s-.282 1.36-.797 1.781c-.469.422-1.125.657-1.782.703-.14.047-.28 0-.421-.046v.656c0 .61-.328 1.125-.797 1.5a3.06 3.06 0 0 1-1.735.562c-.046 0-.093 0-.093-.047h-1.875a.905.905 0 0 1-.657-1.546 2.1 2.1 0 0 0-.421-1.032 1.37 1.37 0 0 0-.985-.422c-.422 0-.75.188-.937.422-.235.235-.375.61-.422 1.032a.905.905 0 0 1-.656 1.547H8.062c-.046.046-.093.046-.093.046-.657 0-1.313-.234-1.735-.562-.468-.375-.796-.89-.796-1.547v-6c0-.281-.047-.469-.047-.656 0-.235 0-.422.046-.844V18c0-.094 0-.375-.046-.61v-.046c-.094.047-.235.047-.375.047-.657-.047-1.313-.282-1.782-.657a2.25 2.25 0 0 1-.843-1.78c0-.75.328-1.36.843-1.735.516-.375 1.125-.516 1.782-.563.14 0 .28 0 .375.047V12c0-.61.375-1.125.843-1.5a3.06 3.06 0 0 1 1.735-.562h1.547c-.047-.094-.047-.235-.047-.376q.07-1.054.703-1.828A2.47 2.47 0 0 1 12 6.938c.75 0 1.36.328 1.781.796q.633.773.703 1.829c.047.14 0 .28-.046.374h1.546c.657 0 1.313.235 1.782.563.468.375.797.89.797 1.5v8.109c-.047.141-.047.282-.047.75v.61c.14-.047.28-.047.422-.047a3.27 3.27 0 0 1 1.828.703zM7.875 27.938h1.641c-.047-.094-.047-.235-.047-.375q.07-1.055.703-1.829a2.36 2.36 0 0 1 1.781-.797c.75 0 1.406.329 1.828.797q.633.774.703 1.828c0 .141 0 .282-.046.375h1.593c.422 0 .797-.14 1.032-.28.234-.235.375-.423.375-.61v-1.078a.905.905 0 0 1 1.546-.657c.422-.046.797-.187 1.032-.421.234-.188.422-.516.422-.938 0-.469-.188-.75-.422-.984a2.1 2.1 0 0 0-1.032-.422.905.905 0 0 1-1.547-.656v-1.829h-3.421c-.797 0-1.22-.984-.657-1.546-.046-.422-.187-.797-.421-1.032-.235-.234-.516-.422-.938-.422-.469 0-.75.188-.984.422-.188.235-.375.61-.422 1.032a.905.905 0 0 1-.656 1.547H6.562V27c0 .188.094.422.329.61.234.187.609.328.984.328m-1.312-9h2.953c-.047-.094-.047-.235-.047-.375q.07-1.055.703-1.829a2.36 2.36 0 0 1 1.781-.797c.75 0 1.406.329 1.828.797q.633.774.703 1.828c0 .141 0 .282-.046.375h3V12c0-.187-.094-.375-.375-.61-.235-.187-.61-.328-1.079-.328h-1.968a.905.905 0 0 1-.657-1.546c-.046-.422-.187-.797-.421-1.032A1.19 1.19 0 0 0 12 8.063c-.422 0-.75.187-.984.421-.188.235-.375.61-.422 1.032a.905.905 0 0 1-.656 1.547h-1.97c-.421 0-.796.14-1.077.328-.235.234-.328.422-.328.609v.047c0 .094 0 .422-.047.703-.047.188-.047.328-.094.516-.047.14-.14.375-.375.515-.188.14-.375.188-.516.14-.187 0-.281-.046-.375-.093 0 0-.047 0-.047-.047h-.046c-.516.047-.891.188-1.172.328-.188.188-.328.422-.328.844s.14.703.374.89q.352.353 1.126.423h.046c0-.047.047-.047.047-.047.094-.047.188-.094.375-.094.14-.047.328 0 .516.14.234.141.328.376.375.516s.047.328.094.516c.046.281.046.61.046.703v.984z' />
    </g>
    <defs>
      <clipPath id='53af5ac77fec09b7b36611543f854965__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoXlRegularIcon);
export default ForwardRef;
