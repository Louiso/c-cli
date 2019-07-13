#include"index.h"

Persona new_Persona(){
  Persona this = (Persona)malloc(sizeof(struct Persona));
  return this;
}
