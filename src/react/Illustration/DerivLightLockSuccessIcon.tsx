import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightLockSuccessIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#EBECEF'
      d='M16.304 44.773c.009-1.684.973-3.35 2.867-4.007l15.334-5.27a10.62 10.62 0 0 1 7.286.141l55.077 21.279c1.84.71 2.709 2.49 2.533 4.173h.027v43.767h-.018c.132 1.473-.535 3.016-2.043 3.849l-1.885 1.043a36.35 36.35 0 0 1-31.282 1.885L18.97 93.292c-1.561-.632-2.42-1.947-2.613-3.35l-.044-.017V44.764z'
    />
    <path
      fill='#000'
      fillRule='evenodd'
      d='M41.899 35.357a10.92 10.92 0 0 0-7.492-.144l-15.334 5.269c-2.026.703-3.06 2.492-3.07 4.289L16 45.5l.012-.013v44.64l.074.03a4.45 4.45 0 0 0 2.77 3.411l45.231 18.342a36.65 36.65 0 0 0 31.54-1.901l1.885-1.043c1.51-.834 2.235-2.333 2.214-3.812h.002V60.789h-.006c.048-1.702-.886-3.436-2.746-4.154zm57.229 26.032h-.06l.035-.332c.163-1.564-.643-3.206-2.343-3.862L41.682 35.917a10.32 10.32 0 0 0-7.08-.137L19.27 41.05c-1.668.58-2.56 1.994-2.656 3.476V89.72l.017.007.024.173c.18 1.307.976 2.525 2.427 3.112l45.232 18.342a36.05 36.05 0 0 0 31.024-1.87l1.885-1.043c1.395-.77 2.011-2.194 1.89-3.56l-.03-.327h.046z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m19.18 40.775 11.521-3.963V17.374c0-9.32 9.487-15.64 18.087-12.055l22.9 9.548a21.4 21.4 0 0 1 13.17 19.762v17.648l12.002 4.638c3.165 1.228 3.472 5.594.5 7.233l-1.885 1.044a36.35 36.35 0 0 1-31.282 1.885L18.962 48.735c-3.648-1.481-3.507-6.69.219-7.97zm52.71 6.496V36.268c0-4.91-2.98-9.328-7.54-11.152L46.44 17.909c-1.254-.508-2.622.421-2.622 1.771v16.746z'
    />
    <path
      fill='#B1B4BC'
      d='m34.416 69.33 2.209.903v7.741c0 1.07.631 2.043 1.613 2.473l15.65 6.9v1.657c0 1.946-2.008 3.253-3.788 2.472l-17.789-7.838a2.7 2.7 0 0 1-1.613-2.472v-9.329c0-1.92 1.947-3.226 3.718-2.499z'
    />
    <path
      fill='#EBECEF'
      d='M36.625 77.975v-7.742l15.58 6.356a2.7 2.7 0 0 1 1.683 2.499v8.259l-15.65-6.9a2.7 2.7 0 0 1-1.613-2.472'
    />
    <path
      fill='#000'
      fillRule='evenodd'
      d='M30.402 71.837c0-2.132 2.162-3.585 4.131-2.776l17.789 7.26a3 3 0 0 1 1.87 2.767v9.916c0 2.163-2.231 3.614-4.208 2.747l-17.79-7.838a3 3 0 0 1-1.792-2.747zm23.19 14.938v-7.678a2.4 2.4 0 0 0-1.496-2.221l-15.19-6.199v7.595a1.7 1.7 0 0 0 1.01 1.554zm0 .657v1.572c0 1.729-1.785 2.891-3.367 2.198l-17.788-7.838a2.4 2.4 0 0 1-1.435-2.198v-9.329c0-1.707 1.73-2.867 3.304-2.22l2 .815v7.84a2.3 2.3 0 0 0 1.367 2.103z'
      clipRule='evenodd'
    />
    <g fill='#000' fillRule='evenodd' clipRule='evenodd'>
      <path d='M43.517 35.988v7.715c0 .295-.186.612-.587.943-.395.326-.952.624-1.58.882-1.25.514-2.707.839-3.53.917h-1.008l-.014.001c-.898.082-2.374-.24-3.634-.834-.626-.295-1.178-.647-1.569-1.031-.393-.387-.594-.776-.594-1.15v-7.04l-11.918 4.1c-3.989 1.37-4.139 6.945-.235 8.53l45.231 18.342a36.65 36.65 0 0 0 31.54-1.9l1.885-1.043c3.197-1.764 2.864-6.457-.536-7.776L84.557 51.85v8.003c0 .314-.177.652-.538 1.002-.357.347-.863.672-1.436.956-1.146.568-2.494.934-3.306.986h-1.034c-.883.055-2.434-.183-3.765-.669-.663-.242-1.25-.539-1.666-.875-.42-.34-.622-.684-.622-1.023V47.065zM71.59 47.477v12.752c0 .6.36 1.097.844 1.489.487.395 1.143.719 1.838.973 1.384.505 3.013.763 3.998.705h1.035c.907-.056 2.339-.451 3.544-1.048.604-.299 1.17-.657 1.588-1.063.415-.403.72-.887.72-1.433v-7.128l11.594 4.48c2.93 1.136 3.21 5.175.463 6.69l-1.885 1.044a36.05 36.05 0 0 1-31.024 1.87L19.074 48.465c-3.39-1.377-3.26-6.218.204-7.408L30.4 37.232v6.199c0 .599.321 1.133.774 1.578.454.447 1.07.834 1.733 1.146 1.313.618 2.89.98 3.93.89h1.01l.014-.001c.881-.082 2.406-.422 3.715-.96.655-.27 1.274-.595 1.735-.975.455-.376.805-.846.805-1.406v-6.84z' />
      <path d='M44.117 19.68a1.608 1.608 0 0 1 2.208-1.493h.001l17.912 7.207a11.705 11.705 0 0 1 7.352 10.874v11.003h.6V36.268c0-5.032-3.055-9.561-7.729-11.43l-17.91-7.207c-1.453-.589-3.034.488-3.034 2.05v16.745h.6z' />
      <path d='M48.903 5.042C40.105 1.374 30.401 7.84 30.401 17.374v19.438h.6V17.374C31 8.27 40.269 2.093 48.672 5.596l22.9 9.548a21.1 21.1 0 0 1 12.985 19.485v17.648h.6V34.63a21.7 21.7 0 0 0-13.353-20.04z' />
    </g>
    <path
      fill='#FF535E'
      d='M67.333 98.84c.287 1.974.826 5.426 3.082 9.125a22 22 0 0 0 4.22 5.025 22 22 0 0 0 2.468 1.872q4.781 2.29 9.569 4.581c-4.411-2.548-6.627-6.149-7.502-7.609-2.26-3.776-2.794-7.207-3.082-9.193-.898-6.195.556-11.028 1.226-13.169a31.8 31.8 0 0 1 5.743-10.647c1.236-1.507 3.745-4.506 8.054-6.969 2.38-1.36 6.555-3.674 12.292-3.503 2.778.083 5.101.725 6.788 1.374q-4.025-1.999-8.047-3.999a23.1 23.1 0 0 0-5.604-1.277 23 23 0 0 0-6.216.21c-3.56.625-6.042 1.97-7.548 2.799-.846.469-4.09 2.32-7.355 5.885a31.7 31.7 0 0 0-4.41 6.216 32.3 32.3 0 0 0-3.504 10.244c-.283 1.743-.773 4.928-.174 9.035'
    />
    <path
      fill='#000'
      d='M86.67 119.776a.333.333 0 0 0 .166-.621c-4.429-2.56-6.653-6.272-7.383-7.493-2.274-3.796-2.771-7.227-3.039-9.07-.906-6.242.634-11.167 1.214-13.022a31.2 31.2 0 0 1 5.684-10.534c1.081-1.319 3.611-4.406 7.962-6.89 2.22-1.27 6.356-3.632 12.117-3.46 2.276.068 4.523.524 6.679 1.35a.334.334 0 0 0 .424-.176.335.335 0 0 0-.157-.433l-5.354-2.66-2.693-1.336-.035-.015a23.5 23.5 0 0 0-5.683-1.296 23.4 23.4 0 0 0-6.307.213c-3.676.645-6.263 2.07-7.652 2.836-1.507.835-4.477 2.718-7.44 5.951a32.2 32.2 0 0 0-4.457 6.282 32.5 32.5 0 0 0-3.54 10.35c-.258 1.59-.795 4.896-.176 9.136.276 1.894.792 5.421 3.129 9.25a22.4 22.4 0 0 0 4.284 5.101c.785.69 1.629 1.329 2.507 1.903l.038.021 6.372 3.051 3.197 1.53a.3.3 0 0 0 .143.033zm16.144-51.766c-5.648 0-9.825 2.389-11.87 3.557-4.457 2.546-7.042 5.7-8.146 7.047a31.8 31.8 0 0 0-5.803 10.758c-.592 1.893-2.166 6.923-1.238 13.317.275 1.889.785 5.405 3.127 9.316.557.931 1.961 3.276 4.518 5.505l-6.136-2.937a21.5 21.5 0 0 1-2.414-1.833 21.8 21.8 0 0 1-4.155-4.948c-2.265-3.713-2.767-7.151-3.037-8.999-.603-4.138-.078-7.377.175-8.934a31.8 31.8 0 0 1 3.468-10.137 31.5 31.5 0 0 1 4.364-6.151c2.898-3.164 5.8-5.003 7.27-5.818 1.355-.747 3.878-2.138 7.446-2.763a22.6 22.6 0 0 1 6.126-.206c1.88.188 3.73.61 5.505 1.254l2.676 1.329q1.038.517 2.076 1.03a20.6 20.6 0 0 0-3.948-.382z'
    />
    <path
      fill='#FF444F'
      d='m85.96 94.38 10.779 10.212q4.379 2.079 8.756 4.158L86.844 91.082c-.286.762-.654 1.89-.885 3.297'
    />
    <path
      fill='#000'
      d='M105.492 109.083a.333.333 0 0 0 .23-.574l-18.65-17.668a.332.332 0 0 0-.54.123c-.41 1.09-.713 2.22-.903 3.36-.018.11.02.22.1.296l10.78 10.213a.4.4 0 0 0 .086.058l8.756 4.158a.3.3 0 0 0 .143.032zm-18.509-17.41 16.76 15.878-6.817-3.237-10.612-10.055c.155-.873.378-1.741.67-2.586'
    />
    <path
      fill='#FF444F'
      d='M89.007 106.936c2.94 3.288 6.76 3.893 7.55 4.003 4.744.657 8.197-1.658 8.948-2.19l-8.755-4.159c-.55.333-1.266.722-2.136 1.086-.36.148-1.387.563-2.803.875a17 17 0 0 1-2.806.383z'
    />
    <path
      fill='#000'
      d='M98.249 111.39c3.661 0 6.362-1.6 7.446-2.368a.33.33 0 0 0-.048-.571l-8.756-4.158a.33.33 0 0 0-.314.016c-.664.403-1.367.761-2.092 1.065a16.8 16.8 0 0 1-5.498 1.232.331.331 0 0 0-.23.554c2.799 3.127 6.355 3.917 7.754 4.112.6.083 1.182.12 1.74.12zm6.581-2.591c-1.45.915-4.416 2.34-8.231 1.811-1.248-.173-4.307-.847-6.871-3.395a17.7 17.7 0 0 0 5.011-1.229c.7-.293 1.38-.635 2.026-1.016z'
    />
    <path
      fill='#FF444F'
      d='M104.768 84.805c.208.741.744 2.857.488 5.612a16 16 0 0 1-.238 1.635l7.767 7.401a16.3 16.3 0 0 0 1.331-6.164c.027-1.54.035-4.497-1.786-7.565-.652-1.097-2.588-3.983-6.304-5.394a11.6 11.6 0 0 0-3.926-.755 15.1 15.1 0 0 1 2.668 5.23'
    />
    <path
      fill='#000'
      d='M112.783 99.786a.336.336 0 0 0 .306-.201 16.5 16.5 0 0 0 1.357-6.291c.025-1.469.076-4.524-1.833-7.74-.88-1.483-2.891-4.176-6.472-5.535a12 12 0 0 0-4.037-.777.335.335 0 0 0-.268.539 14.6 14.6 0 0 1 2.61 5.115c.339 1.206.695 3.137.476 5.49-.05.534-.128 1.073-.233 1.602a.33.33 0 0 0 .096.306l7.726 7.362.042.04c.063.06.145.091.23.091zm-9.994-19.844c1.073.085 2.118.32 3.116.7 3.391 1.287 5.299 3.843 6.136 5.252 1.813 3.054 1.763 5.983 1.74 7.39a15.8 15.8 0 0 1-1.12 5.593l-7.285-6.94c.093-.493.163-.993.208-1.49a15.9 15.9 0 0 0-.499-5.733 15.3 15.3 0 0 0-2.296-4.772'
    />
    <path
      fill='#FF7E88'
      d='M77.31 89.473a31.8 31.8 0 0 1 5.744-10.647c1.236-1.505 3.744-4.506 8.055-6.97 2.379-1.358 6.554-3.674 12.294-3.502a20.7 20.7 0 0 1 9.07 2.416c.931.498 4.033 2.251 6.76 5.814 2.791 3.647 3.652 7.194 4.098 9.105 1.005 4.323.639 7.774.421 9.665a31.6 31.6 0 0 1-2.766 9.701c-2.607 5.575-6.145 8.915-7.144 9.823-2.114 1.921-6.056 5.502-12.399 6.725-1.995.384-8.08 1.465-14.289-1.891-4.734-2.559-7.079-6.368-7.986-7.881-2.26-3.774-2.792-7.207-3.082-9.193-.9-6.193.556-11.028 1.226-13.169z'
    />
    <path
      stroke='#0E0E0E'
      strokeWidth={0.6}
      d='M77.31 89.473a31.8 31.8 0 0 1 5.744-10.647c1.236-1.505 3.744-4.506 8.055-6.97 2.379-1.358 6.554-3.674 12.294-3.502a20.7 20.7 0 0 1 9.07 2.416c.931.498 4.033 2.251 6.76 5.814 2.791 3.647 3.652 7.194 4.098 9.105 1.005 4.323.639 7.774.421 9.665a31.6 31.6 0 0 1-2.766 9.701c-2.607 5.575-6.145 8.915-7.144 9.823-2.114 1.921-6.056 5.502-12.399 6.725-1.995.384-8.08 1.465-14.289-1.891-4.734-2.559-7.079-6.368-7.986-7.881-2.26-3.774-2.792-7.207-3.082-9.193-.9-6.193.556-11.028 1.226-13.169z'
    />
    <path
      fill='#FF444F'
      d='m95.685 100.913-4.22-3.621a2.802 2.802 0 1 0-3.634 4.264l8.072 6.832a.44.44 0 0 0 .616-.049l15.723-18.22a2.789 2.789 0 1 0-4.233-3.635z'
    />
    <path
      stroke='#0E0E0E'
      strokeWidth={0.6}
      d='m95.686 100.913-4.22-3.621a2.802 2.802 0 1 0-3.634 4.264l8.072 6.832a.44.44 0 0 0 .616-.049l15.723-18.22a2.79 2.79 0 1 0-4.234-3.635z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightLockSuccessIcon);
export default ForwardRef;